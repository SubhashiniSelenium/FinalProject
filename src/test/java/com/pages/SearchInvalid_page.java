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

public class SearchInvalid_page {
	WebDriver driver;
	By SearchInvalid=By.xpath("\"//i[@class='svg svg-search nav-action-list-items-search-form-icon has-fill-white']\"");	
		
	public void launching_the_browser() {
		//To open chrome browser
		 System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
		    driver=new ChromeDriver();
		    //To maximize the window
		    driver.manage().window().maximize();
		    //To manage the implicity time
		    driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	}
	//To launch the application
	public void launching_the_application2() {
		driver.get("https://saucelabs.com/");
	}
	//To search the invalid information
	public void click_on_search_Symbol() {
		driver.findElement(SearchInvalid).click();
	}
	public void enter_the_Invalid_info_and_click_Enter_from_keyboard() {
		WebElement element=driver.findElement(By.xpath("(//input[@placeholder='Search'])[2]"));
		element.sendKeys("dsggdjhd");
		element.sendKeys(Keys.ENTER);
		driver.close();
	} }

