package com.pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.stepdefinition.WebElement;

public class SearchValid_page {
	WebDriver driver;
	
	public void SearchValid_page() {
		this.driver=driver;
	}
	//To launch chrome browser
	public void launching_the_browser() {
		 System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
		    driver=new ChromeDriver();
		    driver.manage().window().maximize();
		    driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	}
	//To laumch the application
	public void launching_the_application() {
		driver.get("https://saucelabs.com/");
	}
	//To search valid information
	public void click_on_search_Symbol() {
		driver.findElement(By.xpath("//i[@class='svg svg-search nav-action-list-items-search-form-icon has-fill-white']")).click();
	}
	
	public void enter_the_valid_info_and_click_Enter_from_keyboard() {
		WebElement element=driver.findElement(By.xpath("(//input[@placeholder='Search'])[2]"));
		element.sendKeys("selenium");
		element.sendKeys(Keys.ENTER);
		driver.close();
	} }

