# **EpiRaider - FFXIV Penguin Mechanics Trainer**

## **Implementation Plan**

### **🎯 Project Overview**

**Goal**: Create a web-based training tool where players control penguins to practice FFXIV raid mechanics in a structured, gamified environment.

**Inspiration**: Similar to the World of Warcraft pineapple mechanics trainer, but with penguins as the signature trademark and FFXIV raid mechanics.

**Tech Stack**:

- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Game Engine**: Phaser 3
- **State Management**: Zustand (lightweight, perfect for game state)
- **Styling**: Tailwind CSS + Custom CSS for game UI
- **Assets**: Custom penguin sprites, FFXIV-inspired mechanics assets

---

## **🏗️ Architecture Design**

### **1. Project Structure**

```
src/
├── app/                    # Next.js app router
│   ├── game/              # Game pages
│   ├── mechanics/         # Mechanics library pages
│   └── profile/           # User progress pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── game/             # Game-specific components
│   └── layout/           # Layout components
├── game/                  # Phaser 3 game logic
│   ├── scenes/           # Game scenes
│   ├── entities/         # Game objects (Penguin, mechanics)
│   ├── mechanics/        # Raid mechanics implementations
│   ├── utils/            # Game utilities
│   └── config/           # Game configuration
├── lib/                   # Utilities and helpers
├── types/                 # TypeScript definitions
└── data/                  # Game data and configurations
```

### **2. Core Components Integration**

**Next.js + Phaser Integration**:

- Phaser game mounted in React component using `useRef` and `useEffect`
- Communication between React UI and Phaser game via event system
- Game state synchronized with React state for UI updates

---

## **🐧 Game Design Framework**

### **Core Game Loop**

1. **Mechanic Selection** → Choose specific raid mechanic to practice
2. **Difficulty Setting** → Adjust complexity and timing
3. **Practice Round** → Execute mechanic with penguin character
4. **Performance Review** → Analyze mistakes and improvements
5. **Progression** → Unlock harder mechanics and combinations

### **Penguin Character System**

- **Base Penguin**: Default character with customization options
- **Job-Specific Appearances**: Visual variations for Tank/Healer/DPS roles
- **Animations**: Idle, walking, dodging, special actions
- **Physics**: Smooth movement with collision detection

---

## **⚡ Mechanics Implementation Strategy**

### **Phase 1: Foundation Mechanics**

1. **Stack Mechanics** - Group positioning
2. **Spread Mechanics** - Individual positioning
3. **Line AOE Dodging** - Movement timing
4. **Circle AOE Avoidance** - Safe spot identification
5. **Knockback Resistance** - Positioning + timing

### **Phase 2: Intermediate Mechanics**

1. **Tethers** - Partner coordination simulation
2. **Towers** - Priority assignment
3. **Gaze Attacks** - Look-away mechanics
4. **Donut AOEs** - Inner/outer safe zones
5. **Sequential Mechanics** - Chained actions

### **Phase 3: Advanced Mechanics**

1. **Multi-phase Combinations** - Complex sequences
2. **Role-specific Mechanics** - Tank swaps, healing priorities
3. **Timing Combinations** - Multiple overlapping mechanics
4. **Savage-level Complexity** - Frame-perfect execution

---

## **🎮 Technical Implementation Details**

### **Phaser 3 Scene Architecture**

```typescript
class MechanicTrainingScene extends Phaser.Scene {
  // Scene management for different mechanics
  // Dynamic loading of mechanic configurations
  // Real-time performance tracking
}

class MainMenuScene extends Phaser.Scene {
  // Mechanic selection interface
  // Progress display
  // Settings configuration
}

class ResultsScene extends Phaser.Scene {
  // Performance analysis
  // Replay system
  // Next mechanic suggestions
}
```

### **Game State Management**

```typescript
interface GameState {
  currentMechanic: MechanicType;
  difficulty: DifficultyLevel;
  playerProgress: PlayerProgress;
  sessionStats: SessionStats;
  settings: GameSettings;
}
```

### **Mechanic Definition System**

```typescript
interface MechanicDefinition {
  id: string;
  name: string;
  description: string;
  difficulty: number;
  phases: MechanicPhase[];
  successCriteria: SuccessCriteria;
  assets: AssetDefinition[];
}
```

---

## **📊 Features & Systems**

### **Core Features**

- ✅ **Mechanic Library**: Comprehensive collection of FFXIV raid mechanics
- ✅ **Progressive Difficulty**: Adaptive learning curve
- ✅ **Performance Analytics**: Detailed feedback and improvement suggestions
- ✅ **Replay System**: Review and analyze attempts
- ✅ **Customizable Settings**: Speed, difficulty modifiers, visual aids

### **Advanced Features**

- 🎯 **Custom Mechanic Builder**: Create and share custom scenarios
- 🏆 **Achievement System**: Unlock rewards for mastery
- 📈 **Progress Tracking**: Long-term improvement metrics
- 🎨 **Penguin Customization**: Visual personalization
- 🔊 **Audio Cues**: FFXIV-inspired sound design

### **Social Features**

- 👥 **Leaderboards**: Compare performance with other players
- 📤 **Sharing**: Share difficult scenarios or perfect runs
- 🎓 **Training Plans**: Structured learning paths for specific raids

---

## **🚀 Development Phases**

### **Phase 1: Foundation (Weeks 1-3)**

1. **Setup Phaser 3 integration** with Next.js
2. **Create basic penguin character** with movement
3. **Implement first 3 basic mechanics** (stack, spread, line AOE)
4. **Build core UI framework** for mechanic selection
5. **Add basic performance tracking**

### **Phase 2: Core Mechanics (Weeks 4-6)**

1. **Expand mechanic library** to 10 core mechanics
2. **Add difficulty scaling system**
3. **Implement replay and analysis features**
4. **Create progression and unlocks system**
5. **Add visual polish and animations**

### **Phase 3: Advanced Features (Weeks 7-10)**

1. **Complex mechanic combinations**
2. **Custom mechanic builder**
3. **Achievement and progression systems**
4. **Social features and leaderboards**
5. **Mobile responsiveness optimization**

### **Phase 4: Polish & Launch (Weeks 11-12)**

1. **Performance optimization**
2. **Comprehensive testing**
3. **Asset finalization**
4. **Launch preparation**

---

## **🎨 Asset Requirements**

### **Penguin Assets**

- Base penguin sprite sheets (idle, walk, dodge, special actions)
- Job-specific variations (tank armor, healer robes, DPS gear)
- Emotion states (success, failure, concentration)

### **Mechanic Assets**

- AOE indicators (circles, lines, donuts, cones)
- Visual effects (explosions, safe zones, danger zones)
- UI elements (timers, health bars, mechanic names)

### **Environmental Assets**

- FFXIV-inspired arena backgrounds
- Particle effects for immersion
- Audio cues and background music

---

## **🔧 Dependencies and Setup**

### **Required Dependencies**

```json
{
  "dependencies": {
    "phaser": "^3.80.0",
    "zustand": "^4.5.0"
  },
  "devDependencies": {
    "@types/phaser": "^3.80.0"
  }
}
```

### **Initial Setup Tasks**

1. Install Phaser 3 and related dependencies
2. Configure TypeScript definitions for Phaser
3. Set up game component integration with Next.js
4. Create basic project structure
5. Implement core game initialization

---

## **📝 Next Steps**

1. **Immediate**: Install Phaser 3 dependencies
2. **Week 1**: Create basic Phaser integration with Next.js
3. **Week 1**: Implement basic penguin character movement
4. **Week 2**: Build first mechanic (stack positioning)
5. **Week 2**: Create mechanic selection UI

---

## **🎯 Success Metrics**

### **Technical Metrics**

- Game loads and runs smoothly at 60 FPS
- Responsive design works across devices
- Zero critical bugs in core mechanics

### **User Experience Metrics**

- Intuitive controls and clear feedback
- Progressive difficulty that maintains engagement
- Clear performance improvement tracking

### **Educational Metrics**

- Measurable improvement in mechanic execution
- Successful transfer of skills to actual FFXIV raids
- Positive user feedback on learning effectiveness

---

This implementation plan provides a roadmap for creating EpiRaider, an engaging and educational FFXIV mechanics trainer featuring penguin characters. The phased approach ensures steady progress while maintaining code quality and user experience standards.
