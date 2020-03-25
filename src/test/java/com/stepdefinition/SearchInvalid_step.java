package com.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;

import com.pages.SearchInvalid_page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchInvalid_step {
	SearchInvalid_page invalid=new SearchInvalid_page();
	
	@Given("^LAUNCHINg the browser$")
	public void launching_the_browser() {
		invalid.launching_the_browser();	
	}
	@When("^LAUNCHINg the application$")
	public void launching_the_application2() {
		invalid.launching_the_application2();
	}	

	@Then("^CLIck on search Symbol$")
	public void click_on_search_Symbol1() {
		invalid.click_on_search_Symbol();
	}

	@Then("^Enter the invalid info and click Enter from keyboard$")
	public void enter_the_invalid_info_and_click_Enter_from_keyboard() {
		invalid.enter_the_Invalid_info_and_click_Enter_from_keyboard();
		
		
	}

}

	