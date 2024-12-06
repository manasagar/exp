import puppeteer from 'puppeteer';
import percySnapshot from '@percy/puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    await page.setViewport({ 
      width: 1280, 
      height: 800 
    });

    // Home
    await page.goto('http://localhost:6201', {
      waitUntil: ['networkidle0', 'domcontentloaded']
    });
    
    await page.waitForSelector('body', {timeout: 10000});
    
    // Using Percy snapshot correctly
    await percySnapshot(page, 'Dhrona Homepage Test', {
      widths: [375, 768, 1280],
      minHeight: 800
    });
    // Dashboard
    await page.goto('http://localhost:6201/dashboard');
    await percySnapshot(page, 'Dhrona Dashboard Page Test', {
      widths: [375, 768, 1280]
    });

     // Auth pages
    await page.goto('http://localhost:6201/common/login');
    await percySnapshot(page, 'Dhrona Login Page Test', {
      widths: [375, 768, 1280]
    });
    
    await page.goto('http://localhost:6201/common/register');
    await percySnapshot(page, 'Dhrona Registration Page Test', {
      widths: [375, 768, 1280]
    });

     // Buddy Learning
    await page.goto('http://localhost:6201/buddy/availableSessions');
    await percySnapshot(page, 'Dhrona Available Sessions Page Test', {
      widths: [375, 768, 1280]
    });

    await page.goto('http://localhost:6201/buddy/findBuddy');
    await percySnapshot(page, 'Dhrona Book a Session Page Test', {
      widths: [375, 768, 1280]
    });

    // Micro Learning
    await page.goto('http://localhost:6201/ml/gw');    
    await percySnapshot(page, 'Dhrona All Courses Page Test', {
      widths: [375, 768, 1280]
    });

    await page.goto('http://localhost:6201/buddy/currentSession');    
    await percySnapshot(page, 'Dhrona Current Session Page Test', {
      widths: [375, 768, 1280]
    });
    
    //Others
    await page.goto('http://localhost:6201/common/profile');    
    await percySnapshot(page, 'Dhrona Profile Page Test', {
      widths: [375, 768, 1280]
    });  
   
    await page.goto('http://localhost:6201/common/pricing');    
    await percySnapshot(page, 'Dhrona Pricing Page Test', {
      widths: [375, 768, 1280]
    });
      
    await page.waitForSelector('body', {timeout: 10000});
    await browser.close();
    }
     catch (error) {
    console.error('Percy Test Error:', error);
    process.exit(1);
  }
})();

