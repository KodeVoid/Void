import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EasterEgg({ onComplete }) {
  const [stage, setStage] = useState("egg"); // stages: egg → shake → bang → crack → reveal
  const [shaking, setShaking] = useState(false);

  const handleClick = () => {
    if (stage === "egg") {
      setStage("shake");
      setShaking(true);
      setTimeout(() => {
        setStage("bang");
      }, 1500);
    }
    else if (stage === "bang") setStage("crack");
    else if (stage === "crack") {
      setStage("reveal");
      setTimeout(() => {
        onComplete(); // Exit animation
      }, 2000);
    }
  };

  // Exit button handler
  const handleExit = (e) => {
    e.stopPropagation(); // Prevent triggering the main click handler
    onComplete();
  };

  // Control shaking effect
  useEffect(() => {
    if (stage === "bang") {
      setShaking(true);
      const shakeTimer = setTimeout(() => {
        setShaking(false);
      }, 2000);
      return () => clearTimeout(shakeTimer);
    }
  }, [stage]);

  // Lightning bolt SVG paths
  const lightningPaths = [
    "M10,0 L0,20 L15,20 L5,40 L20,15 L10,15 L20,0 Z", // Zigzag bolt
    "M20,0 L5,15 L15,15 L0,40 L25,10 L10,10 L20,0 Z", // Another variation
    "M15,0 L0,25 L10,20 L5,40 L20,15 L12,18 L20,0 Z", // Third variation
  ];

  // Function to generate random lightning positions
  const generateLightning = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 80 - 40, // Random position -40 to 40
      y: Math.random() * 80 - 40, // Random position -40 to 40
      scale: 0.5 + Math.random() * 1, // Random scale 0.5 to 1.5
      rotation: Math.random() * 360, // Random rotation 0-360 degrees
      pathIndex: Math.floor(Math.random() * lightningPaths.length), // Random path
      delay: Math.random() * 0.5, // Random delay 0-0.5s
    }));
  };

  // Generate lightning for different stages
  const eggLightning = generateLightning(6);
  const bangLightning = generateLightning(18); // More lightning for violent explosion
  const crackLightning = generateLightning(8);
  const revealLightning = generateLightning(15);

  // Lightning component
  const Lightning = ({ bolts, color, duration }) => (
    <>
      {bolts.map((bolt) => (
        <motion.svg
          key={bolt.id}
          width="40"
          height="40"
          viewBox="0 0 30 40"
          className="absolute"
          initial={{ 
            x: bolt.x, 
            y: bolt.y, 
            scale: 0,
            rotate: bolt.rotation,
            opacity: 0
          }}
          animate={{ 
            scale: bolt.scale,
            opacity: [0, 1, 0.5, 1, 0],
          }}
          transition={{ 
            duration: duration || 0.8, 
            delay: bolt.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 0.5,
          }}
        >
          <motion.path
            d={lightningPaths[bolt.pathIndex]}
            fill={color || "#FFD700"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: bolt.delay }}
          />
        </motion.svg>
      ))}
    </>
  );

  // Realistic egg SVG with detailed texture
  const RealisticEgg = ({ className = "", animate = {} }) => (
    <motion.svg
      width="160"
      height="200"
      viewBox="0 0 160 200"
      className={className}
      animate={animate}
    >
      {/* Base egg shape */}
      <defs>
        <radialGradient id="eggGradient" cx="50%" cy="40%" r="80%" fx="50%" fy="40%">
          <stop offset="0%" stopColor="#FFF6E5" />
          <stop offset="65%" stopColor="#F0D9A5" />
          <stop offset="100%" stopColor="#E6C17D" />
        </radialGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
        </filter>

        <pattern id="eggTexture" patternUnits="userSpaceOnUse" width="50" height="50">
          <rect width="50" height="50" fill="url(#eggGradient)" />
          {/* Speckles and texture */}
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 50}
              cy={Math.random() * 50}
              r={0.5 + Math.random() * 1}
              fill="#D9BC82"
              opacity={0.4 + Math.random() * 0.3}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <circle
              key={i + 20}
              cx={Math.random() * 50}
              cy={Math.random() * 50}
              r={0.3 + Math.random() * 0.6}
              fill="#B99C62"
              opacity={0.2 + Math.random() * 0.2}
            />
          ))}
        </pattern>
      </defs>

      {/* Egg shape with texture */}
      <ellipse
        cx="80"
        cy="90"
        rx="65"
        ry="85"
        fill="url(#eggTexture)"
        filter="url(#shadow)"
      />

      {/* Subtle highlights */}
      <ellipse
        cx="60"
        cy="60"
        rx="35"
        ry="45"
        fill="white"
        opacity="0.15"
      />
      <ellipse
        cx="70"
        cy="50"
        rx="20"
        ry="25"
        fill="white"
        opacity="0.1"
      />
    </motion.svg>
  );

  // Cracked egg component
  const CrackedEgg = ({ className = "" }) => (
    <motion.svg
      width="160"
      height="200"
      viewBox="0 0 160 200"
      className={className}
    >
      <defs>
        <radialGradient id="crackedEggGradient" cx="50%" cy="40%" r="80%" fx="50%" fy="40%">
          <stop offset="0%" stopColor="#FFF6E5" />
          <stop offset="65%" stopColor="#F0D9A5" />
          <stop offset="100%" stopColor="#E6C17D" />
        </radialGradient>
        
        <radialGradient id="innerEggGradient" cx="50%" cy="40%" r="80%" fx="50%" fy="40%">
          <stop offset="0%" stopColor="#FFFAEA" />
          <stop offset="100%" stopColor="#FFF0C6" />
        </radialGradient>

        <filter id="crackedShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
        </filter>

        <pattern id="crackedEggTexture" patternUnits="userSpaceOnUse" width="50" height="50">
          <rect width="50" height="50" fill="url(#crackedEggGradient)" />
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 50}
              cy={Math.random() * 50}
              r={0.5 + Math.random() * 1}
              fill="#D9BC82"
              opacity={0.4 + Math.random() * 0.3}
            />
          ))}
        </pattern>
      </defs>

      {/* Lower part of cracked egg */}
      <path
        d="M24,120 Q40,100 80,95 Q120,100 136,120 Q145,150 80,175 Q15,150 24,120 Z"
        fill="url(#crackedEggTexture)"
        filter="url(#crackedShadow)"
      />

      {/* Inner egg (yellow part) visible through crack */}
      <ellipse
        cx="80"
        cy="110"
        rx="40"
        ry="25"
        fill="url(#innerEggGradient)"
      />

      {/* Top part of cracked egg */}
      <path
        d="M25,120 Q40,90 80,85 Q120,90 135,120 Q120,90 100,85 Q90,83 70,85 Q50,90 25,120 Z"
        fill="url(#crackedEggTexture)"
        filter="url(#crackedShadow)"
      />

      {/* Cracks */}
      <motion.path
        d="M70,85 L73,100 L60,110 M90,85 L87,100 L100,110"
        stroke="#B99C62"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
    </motion.svg>
  );

  return (
    <AnimatePresence>
      <motion.div
        key="egg-sequence"
        className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          x: shaking ? [0, -10, 5, -5, 8, -8, 3, -3, 0] : 0,
          y: shaking ? [0, 5, -8, 8, -5, 10, -10, 3, 0] : 0,
        }}
        transition={{
          x: { duration: shaking ? 0.5 : 0, repeat: shaking ? Infinity : 0, repeatType: "reverse" },
          y: { duration: shaking ? 0.5 : 0, repeat: shaking ? Infinity : 0, repeatType: "reverse" },
        }}
        exit={{ opacity: 0 }}
      >
        {/* Exit button */}
        <motion.div
          className="absolute top-4 right-4 z-50"
          onClick={handleExit}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg cursor-pointer">
            <X size={24} />
          </div>
        </motion.div>

        {/* Background lightning for all stages */}
        <motion.div
          className="absolute inset-0 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`bg-lightning-${i}`}
              className="absolute h-px bg-blue-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${50 + Math.random() * 150}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [1, 1.2, 0.8],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 1 + Math.random() * 3,
              }}
            />
          ))}
        </motion.div>

        {/* Egg stage */}
        {stage === "egg" && (
          <motion.div className="relative flex items-center justify-center">
            {/* Electric aura around egg */}
            <motion.div 
              className="absolute w-40 h-56 rounded-full bg-blue-500" 
              animate={{ 
                boxShadow: [
                  "0 0 5px 2px rgba(56, 182, 255, 0.4)", 
                  "0 0 15px 5px rgba(56, 182, 255, 0.7)", 
                  "0 0 5px 2px rgba(56, 182, 255, 0.4)"
                ] 
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            <RealisticEgg 
              className="relative z-10"
              animate={{
                rotate: [0, 5, 0, -5, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            
            {/* Lightning bolts around egg */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Lightning bolts={eggLightning} color="#00BFFF" />
            </div>
          </motion.div>
        )}

        {/* Shake stage (pre-explosion) */}
        {stage === "shake" && (
          <motion.div className="relative flex items-center justify-center">
            {/* Electric aura intensifying */}
            <motion.div 
              className="absolute w-40 h-56 rounded-full bg-blue-500" 
              animate={{ 
                boxShadow: [
                  "0 0 10px 5px rgba(56, 182, 255, 0.6)", 
                  "0 0 20px 10px rgba(56, 182, 255, 0.9)", 
                  "0 0 30px 15px rgba(56, 182, 255, 1.0)"
                ] 
              }}
              transition={{ duration: 0.3, repeat: 5, repeatType: "reverse" }}
            />
            
            <RealisticEgg 
              className="relative z-10"
              animate={{
                scale: [1, 1.05, 0.95, 1.07, 0.93, 1],
                rotate: [0, 10, -8, 12, -10, 0],
                transition: {
                  duration: 1.5,
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                }
              }}
            />
            
            {/* Intensifying lightning bolts */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Lightning 
                bolts={[...eggLightning, ...generateLightning(6)]} 
                color="#00BFFF" 
                duration={0.4} 
              />
            </div>

            {/* Warning flashes */}
            <motion.div
              className="absolute inset-0 bg-red-500"
              animate={{ opacity: [0, 0.3, 0, 0.5, 0, 0.7, 0] }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>
        )}

        {/* Bang stage - violent explosion */}
        {stage === "bang" && (
          <div className="relative">
            {/* Multiple explosion rings */}
            <motion.div
              className="w-[400px] h-[400px] rounded-full bg-white"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 15, opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
            
            <motion.div
              className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-yellow-400"
              initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0.8 }}
              animate={{ scale: 12, opacity: 0 }}
              transition={{ duration: 1.6, delay: 0.1 }}
            />
            
            <motion.div
              className="absolute top-1/2 left-1/2 w-[250px] h-[250px] rounded-full bg-orange-500"
              initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0.9 }}
              animate={{ scale: 10, opacity: 0 }}
              transition={{ duration: 1.4, delay: 0.2 }}
            />
            
            {/* Electric shockwaves */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={`shockwave-${i}`}
                className="absolute top-1/2 left-1/2 rounded-full border-4 border-blue-400"
                style={{ width: `${150 + i * 30}px`, height: `${150 + i * 30}px` }}
                initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 1 }}
                animate={{ scale: [0, 1, 3, 6], opacity: [1, 0.8, 0.3, 0] }}
                transition={{ duration: 1.2, delay: i * 0.2 }}
              />
            ))}
            
            {/* Egg shell fragments flying out */}
            {Array.from({ length: 12 }).map((_, i) => {
              const rotation = Math.random() * 360;
              const size = 5 + Math.random() * 15;
              return (
                <motion.div
                  key={`fragment-${i}`}
                  className="absolute top-1/2 left-1/2 rounded-full overflow-hidden"
                  style={{ 
                    width: `${size}px`,
                    height: `${size * 1.3}px`,
                    background: `radial-gradient(ellipse at center, #F0D9A5, #E6C17D)`,
                    transform: `rotate(${rotation}deg)`
                  }}
                  initial={{ x: "-50%", y: "-50%" }}
                  animate={{
                    x: `-50% + ${Math.random() * 600 - 300}px`,
                    y: `-50% + ${Math.random() * 600 - 300}px`,
                    rotate: `${rotation + (Math.random() * 720 - 360)}deg`,
                    opacity: [1, 0],
                  }}
                  transition={{ 
                    duration: 1 + Math.random() * 0.5,
                    ease: "easeOut"
                  }}
                />
              );
            })}
            
            {/* Intense lightning during explosion */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Lightning bolts={bangLightning} color="#4FC3F7" duration={0.6} />
            </div>
            
            {/* Flash of light */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}

        {/* Crack stage */}
        {stage === "crack" && (
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Electric aura */}
            <motion.div 
              className="absolute w-40 h-56 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500" 
              animate={{ 
                boxShadow: [
                  "0 0 10px rgba(56, 182, 255, 0.4)", 
                  "0 0 20px rgba(56, 182, 255, 0.7)", 
                  "0 0 10px rgba(56, 182, 255, 0.4)"
                ] 
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            
            {/* Realistic cracked egg */}
            <CrackedEgg className="relative z-10" />
            
            {/* Lightning coming from cracks */}
            <div className="absolute inset-0">
              <Lightning bolts={crackLightning} color="#29B6F6" />
            </div>
          </motion.div>
        )}

        {/* Reveal stage */}
        {stage === "reveal" && (
          <motion.div
            className="text-white text-4xl font-serif relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.span 
              className="text-green-400 relative inline-block"
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(72, 255, 167, 0.7)",
                  "0 0 15px rgba(72, 255, 167, 1)",
                  "0 0 5px rgba(72, 255, 167, 0.7)"
                ]
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              Awakened.
            </motion.span>
            
            {/* Lightning around final text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
              <Lightning bolts={revealLightning} color="#80DEEA" />
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}