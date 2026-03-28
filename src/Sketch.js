import React, { useRef, useEffect } from "react";
import { Paper, Typography } from "@mui/material";
import p5 from "p5";

const papersize = window.screen.width *0.45;
let cloudX = 60;
let cloudDir = 1;
<div>Hello, World!</div>
const SketchComponent = () => {
  
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(600, 400);
       p.textSize(75); 
      p.textAlign(p.CENTER, p.CENTER);
      };

      p.draw = () => {
        // Background
        p.background(135, 206, 235);

        // Sun
        p.fill("yellow");
        p.stroke("orange");
        p.strokeWeight(20);
        p.circle(520, 65, 100);

        // Grass
        p.stroke(0);
        p.strokeWeight(1);
        p.fill("green");
        p.rect(0, 200, 600, 200);

        // Emojis
        p.textSize(55); 
        p.text("🌸", 100, 250); // flower
        p.text("🌷", 300, 220); // flower
        p.text("🌸", 500, 280); // flower
        p.text("🌸", 330, 270); // flower
        p.text("🌷", 200, 200); // flower
        p.text("🌷", 480, 200); // flower
        p.text("🌞", 520, 71); // Sun

        p.textSize(120); 
        p.text("☁️", cloudX, 100); // Cloud
        p.textSize(50);
        p.fill(0, 0, 0, 20); // R,G,B,Alpha (0-255)
        p.stroke(0, 0, 0, 20);
        p.text("😎", cloudX + 22, 96); // Cloud
     
        drawCloud(p);

        p.fill(0, 0, 0, 255); // R,G,B,Alpha (0-255)
        p.stroke(0, 0, 0, 255);
         p.textSize(60); 
         for (let x = 20; x < p.width; x += 50) {
            p.text("🌿", x, 320);
            p.text("🌿", x+5, 350);
            p.text("🌿", x, 380);
        }
        p.textSize(30); 
         p.text("🐞", p.mouseX+5, p.mouseY-20); // ladybug follows mouse
      };
    };

function drawCloud(p) {
   p.textSize(120);
        p.fill(0, 0, 0, 20); // R,G,B,Alpha (0-255)
        p.stroke(0, 0, 0, 20);
        p.text("☁️", cloudX -80, 300); // Shadow for cloud

        // Move cloud
          cloudX += cloudDir; // speed

          // Reset when off screen
          if (cloudX > p.width -55  || cloudX < 60 ) {
            cloudDir *= -1;
          }
}

    const p5Instance = new p5(sketch, sketchRef.current);
    return () => p5Instance.remove();

  }, []);

  return (
    <Paper elevation={10} sx={{ p:5, maxWidth: `${papersize}px`, mx: "auto",
        backgroundColor: "rgb(215, 244, 188)", textAlign: "center"}}>
        <Typography sx={{textAlign: "center",mt: -5, p: 2}} variant="h4" >It's a Bugs Life</Typography>

    <div ref={sketchRef} />
  </Paper>
  );
  
};

export default SketchComponent;