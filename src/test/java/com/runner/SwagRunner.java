package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features="src/main/resources/features/swag.feature",
plugin = {"html:reports/cucumber-html-report","json:target/cucumber.json","pretty:target/cucumber-pretty.txt","usage:target/cucumber-usage.json","junit:target/cucumber-results.xml"},
tags = {"@TS_01,@TS_02,@TS_03,@TS_04,@TS_05"},
glue = {"com/stepdefinition"},
monochrome = true
)

public class SwagRunner {

}
