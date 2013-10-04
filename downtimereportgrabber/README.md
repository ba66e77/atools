Downtime Report Grabber
======================

Description
------------
This tool captures screenshots of downtime reports for supplied sitenames using PhantomJS and outputs them to the output/ directory.

Setup
------
1. In reportgrabber.js, set the path to your phantomjs installation binary.
2. Set the report base url, which should be the path up to but not including the value of the sitename GET parameter. e.g., 'https://server.example.com/site_downtime.php?stage=mc&sitename='
3. Set the username and password for basic auth.

Invocation
--------
run from the command line using "./reportgrabber.js mysite"

The tool will output a warning about a debug class.  Not sure why that is, but the thing seems to work as expected.
