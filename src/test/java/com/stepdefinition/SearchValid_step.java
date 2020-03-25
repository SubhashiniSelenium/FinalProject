package com.stepdefinition;

import org.junit.Assert;

import com.pages.Login_page;
import com.pages.SearchValid_page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchValid_step {
	
	SearchValid_page valid=new SearchValid_page();
	@Given("^LAUNCHING the browser$")
	public void launching_the_browser() {
		valid.launching_the_browser();
	
		}

	@When("^LAUNCHING the application$")
	public void launching_the_application() {
		valid.launching_the_application();
		}

	@When("^click on search Symbol$")
	public void click_on_search_Symbol() {
		valid.click_on_search_Symbol();
	}
	
	@Then("^Enter the valid info and click Enter from keyboard$")
	public void enter_the_valid_info_and_click_Enter_from_keyboard() {
		valid.enter_the_valid_info_and_click_Enter_from_keyboard();
	}
	

	

}



