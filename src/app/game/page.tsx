"use client";

import { useEffect, useRef, useState } from "react";
import Card from "@/components/ui/Card";
import Link from "next/link";

export default function GamePage() {
  const gameCanvasRef = useRef<HTMLDivElement>(null);
  const [gameLoaded, setGameLoaded] = useState(false);

  // This will eventually initialize the Phaser game
  useEffect(() => {
    // TODO: Initialize Phaser 3 game here
    // const game = new Phaser.Game(config);
    // game.mount(gameCanvasRef.current);

    // For now, just simulate loading
    const timer = setTimeout(() => {
      setGameLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
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
                    {!gameLoaded && (
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

                    {/* Game Ready State */}
                    {gameLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-8xl mb-6">🐧</div>
                          <h2 className="text-3xl font-bold mb-4">
                            Game Ready!
                          </h2>
                          <p className="text-text-secondary mb-6">
                            Phaser 3 will mount here. Click restart to begin the
                            fight simulation.
                          </p>
                          <div className="space-y-2 text-sm text-text-muted">
                            <div>🎮 Game Engine: Ready</div>
                            <div>🐧 Penguin Controls: WASD</div>
                            <div>🔥 Fight: M8S Phase 1</div>
                          </div>
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
