package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.Excelutility.Excel_data;

public class Login_page {
	WebDriver driver;
	By username = By.id("user-name");
	By password = By.id("password");
	By loginbutton = By.xpath("//*[@id=\"login_button_container\"]/div/form/input[3]");
	
	public Login_page() {
		this.driver = driver;
	}

public void url(String browser) {
		
		try {
			if(browser.equalsIgnoreCase("chrome")) {

				 //To launch chrome browser
				 System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
				driver=new ChromeDriver();								 
			}
		else if(browser.equalsIgnoreCase("firefox")) {
				//To launch firefox browser
				System.setProperty("webdriver.gecko.driver","src/test/resources/Drivers/geckodriver.exe");
				driver=new FirefoxDriver();
			}
			
			//To maximise the browser
			 driver.manage().window().maximize();
			//To hold the browser for 50 seconds
			 driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
			 driver.get("https://google.com");
			 System.out.println(driver.getTitle());		
		
		} 
		catch(WebDriverException e) {
		System.out.println("browser could not be launched");
		}		
	}
	 
	//To launch Swag Homepage
	  public void swag_homepage() {
		driver.get("https://www.saucedemo.com/");
		 System.out.println(driver.getTitle());
	}
	//To enter username
	public void swaglabs_username(int i) throws IOException {
		Excel_data data=new Excel_data();
		driver.findElement(username).sendKeys(data.excel_username(i));
	}
	//To enter password
	public void swaglabs_password(int i) throws IOException {
		Excel_data data=new Excel_data();
		driver.findElement(password).sendKeys(data.excel_password(i));
	}
	//To click login button
	public void swaglabs_loginbutton() {
		driver.findElement(loginbutton).click();
	}
	//To close the browser
	public void quit()
	{
		driver.close();
	}
}
