package br.go.conections;


import java.io.StringReader;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.soap.*;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;

import org.mule.api.MuleEventContext;
import org.mule.api.lifecycle.Callable;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

public class LoginGoSOAPClientSAAJ implements Callable{
	
	@Override
	public String onCall(MuleEventContext eventContext) throws Exception {
		return loginGoUser();
	}
    

	
    /**
     * Starting point for the SAAJ - SOAP Client Testing
     */
    /*public static void main(String args[]) {
        try {
            // Create SOAP Connection
            SOAPConnectionFactory soapConnectionFactory = SOAPConnectionFactory.newInstance();
            SOAPConnection soapConnection = soapConnectionFactory.createConnection();

            // Send SOAP Message to SOAP Server
            String url = "https://go.visto-web.com.br/services/LoginService";
            SOAPMessage soapResponse = soapConnection.call(createSOAPRequest(), url);

            // Process the SOAP Response
            processSOAPResponse(soapResponse);

            soapConnection.close();
        } catch (Exception e) {
            System.err.println("Error occurred while sending SOAP Request to Server");
            e.printStackTrace();
        }
    }*/
	
	
	
	
	public String loginGoUser(){
        
		SOAPConnectionFactory soapConnectionFactory = null ;
		SOAPConnection soapConnection = null;
		String retorno  = null;
        try{
       	 	// Create SOAP Connection
        	soapConnectionFactory = SOAPConnectionFactory.newInstance();
            soapConnection = soapConnectionFactory.createConnection();
        	
        	// Send SOAP Message to SOAP Server
            String url = "https://go.visto-web.com.br/services/LoginService";
            SOAPMessage soapResponse = soapConnection.call(createSOAPRequest(), url);

            // Process the SOAP Response
            retorno = processSOAPResponse(soapResponse);
            
        } catch (Exception e) {
            System.err.println("Error occurred while sending SOAP Request to Server");
            e.printStackTrace();
        }finally{
        	 try {
				soapConnection.close();
			} catch (SOAPException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        	 
        }
        
        System.out.println("ESSE E O RETORNO = " + retorno );
        return retorno;
	}

    private  SOAPMessage createSOAPRequest() throws Exception {
        MessageFactory messageFactory = MessageFactory.newInstance();
        SOAPMessage soapMessage = messageFactory.createMessage();
        SOAPPart soapPart = soapMessage.getSOAPPart();

        String serverURI = "http://service.webService.arizona.com.br/";

        // SOAP Envelope
        SOAPEnvelope envelope = soapPart.getEnvelope();
        envelope.addNamespaceDeclaration("example", serverURI);

        /*
         Constructed SOAP Request Message:
         <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:example="http://ws.cdyne.com/">
         <SOAP-ENV:Header/>
         <SOAP-ENV:Body>
         <example:VerifyEmail>
         <example:email>mutantninja@gmail.com</example:email>
         <example:LicenseKey>123</example:LicenseKey>
         </example:VerifyEmail>
         </SOAP-ENV:Body>
         </SOAP-ENV:Envelope>
         */
        // SOAP Body
        SOAPBody soapBody = envelope.getBody();
        SOAPElement soapBodyElem = soapBody.addChildElement("login", "example");
        SOAPElement soapBodyElem1 = soapBodyElem.addChildElement("in0", "example");
        soapBodyElem1.addTextNode("flow");
        SOAPElement soapBodyElem2 = soapBodyElem.addChildElement("in1", "example");
        soapBodyElem2.addTextNode("P@ssw0rd");

        MimeHeaders headers = soapMessage.getMimeHeaders();
        headers.addHeader("SOAPAction", serverURI + "LoginService");

        soapMessage.saveChanges();

//        /* Print the request message */
//        System.out.println("Request SOAP Message = ");
//        soapMessage.writeTo(System.out);

        return soapMessage;
    }

    /**
     * Method used to print the SOAP Response
     */
    private String processSOAPResponse(SOAPMessage soapResponse) throws Exception {
        XPathFactory xpathfactory = XPathFactory.newInstance();
        XPath xpath = xpathfactory.newXPath();
 
        XPathExpression expr = xpath.compile("//text()");
        Object result = expr.evaluate(soapResponse.getSOAPBody().extractContentAsDocument(), XPathConstants.NODESET);
        NodeList nodes = (NodeList) result;
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance(); 
        DocumentBuilder builder = factory.newDocumentBuilder();  
        Document document = builder.parse( new InputSource( new StringReader( nodes.item(0).getNodeValue() ))) ;
        expr = xpath.compile("//usuario/text()");
        result = expr.evaluate( document, XPathConstants.NODESET);
        nodes = (NodeList) result;
        String retorno = null;
        for (int i = 0; i < nodes.getLength(); i++) {
           retorno = nodes.item(i).getNodeValue();
        }
		return retorno;

    }

	

}
