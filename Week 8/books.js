// Function to load an XML or XSL file using XMLHttpRequest
function loadXMLDoc(filename) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", filename, false); // Synchronous request (not recommended for large files)
  xhttp.send();
  return xhttp.responseXML; // Return the parsed XML document
}

// Function to transform XML using XSLT and display the result
function transformXML() {
  var xml = loadXMLDoc("books.xml"); // Load XML file
  var xsl = loadXMLDoc("books.xsl"); // Load XSLT file

  if (window.ActiveXObject || "ActiveXObject" in window) {
    // For older Internet Explorer versions
    var ex = xml.transformNode(xsl); // Apply XSLT transformation
    document.getElementById("output").innerHTML = ex; // Display transformed content
  } else if (
    document.implementation &&
    document.implementation.createDocument
  ) {
    // For modern browsers
    var xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl); // Load XSLT stylesheet
    var resultDocument = xsltProcessor.transformToFragment(xml, document); // Transform XML
    document.getElementById("output").appendChild(resultDocument); // Display transformed content
  }
}

// Function to execute an XPath query on the XML document
function queryXML() {
  var xml = loadXMLDoc("books.xml"); // Load XML file
  var query = document.getElementById("xpathQuery").value; // Get user input for XPath query
  var output = document.getElementById("queryOutput");
  output.innerHTML = ""; // Clear previous results

  try {
    // Evaluate the XPath query
    var result = xml.evaluate(query, xml, null, XPathResult.ANY_TYPE, null);
    var node = result.iterateNext();

    // Iterate through matched nodes and display results
    while (node) {
      output.innerHTML += "<p>" + node.textContent + "</p>";
      node = result.iterateNext();
    }
  } catch (e) {
    console.log("Invalid XPath Query"); // Log error for debugging
    output.innerHTML = "<p style='color:red;'>Invalid XPath Query</p>"; // Display error message
  }
}
