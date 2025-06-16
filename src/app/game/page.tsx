"use client";

import { useEffect, useRef, useState } from "react";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { Game } from "@/game/Game";

export default function GamePage() {
  const gameCanvasRef = useRef<HTMLDivElement>(null);
  const gameInstanceRef = useRef<Game | null>(null);
  const [gameLoaded, setGameLoaded] = useState(false);
  const [gameError, setGameError] = useState<string | null>(null);

  // Initialize the Phaser game
  useEffect(() => {
    const initGame = async () => {
      try {
        // Only run on client side
        if (typeof window === "undefined") return;

        if (gameCanvasRef.current && !gameInstanceRef.current) {
          console.log("Initializing game...");

          // Dynamically import the Game class only on client side
          const { Game } = await import("@/game/Game");
          console.log("Game class imported");

          // Create game instance
          gameInstanceRef.current = new Game();
          console.log("Game instance created");

          // Initialize the game
          const game = await gameInstanceRef.current.init(
            "phaser-game-container"
          );
          console.log("Game initialized:", game);

          setGameLoaded(true);
        }
      } catch (error) {
        console.error("Failed to initialize game:", error);
        setGameError("Failed to load game. Please refresh and try again.");
      }
    };

    initGame();

    return () => {
      // Cleanup game on unmount
      if (gameInstanceRef.current) {
        gameInstanceRef.current.destroy();
        gameInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="page-content">
        {/* Game Header */}
        <section className="py-4 bg-surface/50">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 mb-4">
                <Link href="/" className="btn btn-outline btn-sm">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Game Area */}
        <section className="py-6 mt-8">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Game Canvas - Takes up most of the space */}
              <div className="lg:col-span-4">
                <Card className="relative p-0 overflow-hidden bg-black">
                  {/* Phaser Game Mount Point */}
                  <div
                    ref={gameCanvasRef}
                    className="w-full h-[700px] relative"
                    id="phaser-game-container"
                  >
                    {/* Loading State */}
                    {!gameLoaded && !gameError && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="animate-pulse text-6xl mb-4">🐧</div>
                          <h2 className="text-2xl font-bold mb-2">
                            Loading Game...
                          </h2>
                          <p className="text-text-secondary">
                            Initializing Phaser 3 engine
                          </p>
                          <div className="mt-4 w-48 h-2 bg-surface rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Error State */}
                    {gameError && (
                      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-red-800/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">❌</div>
                          <h2 className="text-2xl font-bold mb-2 text-red-400">
                            Game Error
                          </h2>
                          <p className="text-text-secondary mb-4">
                            {gameError}
                          </p>
                          <button
                            onClick={() => window.location.reload()}
                            className="btn btn-outline"
                          >
                            Refresh Page
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
