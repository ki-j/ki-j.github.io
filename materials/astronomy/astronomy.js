// planet properties
function planet(min, max, rad, dist, moons, type) { // define what a planet is. It has properties min and max temp, radius, distance to sun and number of moons
    this.minTemp = min; // min temp in degrees celcius
    this.maxTemp = max; // max temp in degrees celcius 
    this.radius = rad; // radius of body in kilometers
    this.volume = function() { // volume of body in cubic kilometers
        return 3.14 * this.radius * this.radius; 
    }
    this.sunDist = dist; // distance from the sun in miles
    this.moons = moons; // number of moons
    this.type = type; // terrestrial, gas giant, gas giant (ice giant)
  }

const mercury = new planet(-180, 430, 2439.7, 69.3e6, 0, "terrestrial")
const venus = new planet(-438, 482, 6051.8, 108e6, 0, "terrestrial")
const earth = new planet(-89, 57, 6371, 151e6, 1, "terrestrial")
const mars = new planet(-153, 20, 3389.5, 216.3e6, 2, "terrestrial")
const jupiter = new planet(-110, -110, 69911, 778e6, 85, "gas giant")
const saturn = new planet(-140, -140, 58232, 1.4e9, 146, "gas giant")
const uranus = new planet(-195, -195, 25362, 2.9e9, 28, "gas giant (ice giant)")
const neptune = new planet(-200, -200, 24622, 4.5e9, 14, "gas giant (ice giant)")