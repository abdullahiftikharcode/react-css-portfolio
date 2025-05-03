import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import useAnimationFrame from '../../hooks/useAnimationFrame';
import styles from './ProfileImageAnimation.module.css';

/**
 * ProfileImageAnimation component that adds a circular animation around a profile image
 * @param {Object} props Component props
 * @param {string} props.src The image source URL
 * @param {string} props.alt The image alt text
 * @param {number} props.size The size of the image and container (default: 300)
 * @param {boolean} props.active Whether the animation is active (default: true)
 */
const ProfileImageAnimation = ({ src, alt, size = 300, active = true }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = size;
    canvas.height = size;
    
    // Create particles
    const particleCount = 100;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = size / 2 * 0.8 + Math.random() * size / 2 * 0.2;
      
      particles.push({
        x: size / 2 + Math.cos(angle) * radius,
        y: size / 2 + Math.sin(angle) * radius,
        size: 1 + Math.random() * 2,
        baseX: size / 2 + Math.cos(angle) * radius,
        baseY: size / 2 + Math.sin(angle) * radius,
        density: Math.random() * 10 + 1,
        color: `rgba(255, 255, 255, ${0.3 + Math.random() * 0.7})`,
        angle,
        speed: 0.02 + Math.random() * 0.03
      });
    }
    
    particlesRef.current = particles;
    
    // Add mouse move event listener
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size]);
  
  // Animation function
  const animate = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw particles
    particlesRef.current.forEach(particle => {
      // Update position with circular motion
      particle.angle += particle.speed;
      
      // Calculate base position (circular path)
      const radius = size / 2 * 0.8;
      particle.baseX = size / 2 + Math.cos(particle.angle) * radius;
      particle.baseY = size / 2 + Math.sin(particle.angle) * radius;
      
      // Add mouse interaction
      let dx = mouseRef.current.x - particle.x;
      let dy = mouseRef.current.y - particle.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      
      // Maximum distance, past which the force is 0
      const maxDistance = 100;
      let force = (maxDistance - distance) / maxDistance;
      
      // If we're too far away, ignore mouse influence
      if (force < 0) force = 0;
      
      // Apply mouse repulsion
      if (distance < maxDistance) {
        particle.x -= forceDirectionX * force * particle.density;
        particle.y -= forceDirectionY * force * particle.density;
      }
      
      // Apply attraction back to base position
      dx = particle.baseX - particle.x;
      dy = particle.baseY - particle.y;
      distance = Math.sqrt(dx * dx + dy * dy);
      
      const returnForce = distance * 0.03;
      particle.x += dx / 10 * returnForce;
      particle.y += dy / 10 * returnForce;
      
      // Draw the particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });
    
    // Draw a circle at the center for reference
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 * 0.8, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.stroke();
  };
  
  // Use our animation frame hook
  useAnimationFrame(animate, active);
  
  return (
    <Box className={styles.profileWrapper} sx={{ width: size, height: size }}>
      <canvas ref={canvasRef} className={styles.animationCanvas} />
      <img 
        src={src} 
        alt={alt} 
        className={styles.profileImage} 
        width={size * 0.7} 
        height={size * 0.7} 
      />
    </Box>
  );
};

ProfileImageAnimation.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number,
  active: PropTypes.bool
};

export default ProfileImageAnimation; 