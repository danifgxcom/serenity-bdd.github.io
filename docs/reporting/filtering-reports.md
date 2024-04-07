---
id: filtering_reports
title: Filtering Execution and Reports with Tags
sidebar_position: 3
---

Serenity BDD makes it easy to get both a broad overview of your test results and functional coverage.
But when working with large test suites, it is often useful to be able to focus on specific functional areas of the application when reporting results.
For example, you may want to view only the results for the tests related to the current release, or to a specific functional area.

In Serenity BDD, you can use tags to generate this kind of focused report.

This works very naturally with Cucumber test scenarios. For example, in the following feature file, we have used the `@sprint-2` tag to indicate that the scenario is scheduled for Sprint 2.

```gherkin
@sprint-2
Scenario: Buyer orders a coffee
  Given Cathy has a Caffeinate-Me account
  When she orders a large cappuccino
  Then Cathy should receive the order
```

Tagging also works with JUnit test, as illustrated here:

```java
@RunWith(SerenityRunner.class)
public class WhenAddingNumbers {

    @Steps
    MathWizSteps michael;

    @Test
    @WithTag("release:sprint-2")
    public void addingSums() {
        // Given
        michael.startsWith(1);

        // When
        michael.adds(2);

        // Then
        michael.shouldHave(3);
    }

    @WithTagsValuesOf({"Reporting", "release:sprint-3"})
    public void testWithMultipleTags() {
    }
}
```

## Running Scenarios by tags

Tags are also a great way to help organize test execution.
For example, you might want to flag all of the web services tests, or mark certain tests to run against Internet Explorer browser only.
With JUnit tests, this can be achieved by providing a single tag or an "or" separated list of tags from command line.
If provided, only classes and/or methods with tags in this list will be executed.

```bash
mvn clean verify -Dtags="feature:Reporting or release:sprint-2"
mvn clean verify -Dtags="feature:Reporting or release:sprint-2"
```

When using Cucumber, we need to use the `cucumber.options` property to indicate which scenarios should be executed. For example, the following command runs all of the Cucumber scenarios with the `@sprint-2` tag":

```bash
mvn clean verify -Dcucumber.options="--tags=@sprint-2"
```

## Excluding Unrelated Requirements

By default, when you use the `tags` option, Serenity will filter your requirements as best it can to report only the requirements that are relevant to the specified tag.

Requirements filtering only happens if you specify the `tags` option. So this will produce a full set of requirements in the *Requirements* page.

```bash
mvn clean verify -Dcucumber.options="--tags @sprint-2"
```

But this will report only the requirements that are related to the executed tests.

```bash
mvn clean verify -Dcucumber.options="--tags @sprint-2" -Dtags=sprint-2
```

If you have already run the full set of tests, you can also produce a filtered aggregate report, in which case you don't need to provide the `cucumber.options` property:

```bash
mvn serenity:aggregate -Dtags=sprint-2
```

## Using tags with Cucumber and JUnit 5

When running Cucumber tests with JUnit 5, you can use the `FILTER_TAGS_PROPERTY_NAME` configuration property to manage the tags for a specific test runner:

```java
@ConfigurationParameter(key = FILTER_TAGS_PROPERTY_NAME, value = "@smoke-test and @filtering")
public class CucumberTestSuite {
}
```

Alternatively, from the command line, you can use the `tags` command line property as shown here (note that with Cucumber 7, you don't need the '@' symbol for the tags when specifying tags on the command line):

```
mvn clean verify -Dtags="smoke-test or filtering"
```
