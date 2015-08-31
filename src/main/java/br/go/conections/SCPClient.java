package br.go.conections;


import net.schmizz.sshj.SSHClient;
import net.schmizz.sshj.transport.verification.PromiscuousVerifier;
import net.schmizz.sshj.xfer.FileSystemFile;

import org.mule.api.MuleEventContext;
import org.mule.api.lifecycle.Callable;

public class SCPClient implements Callable {

	@Override
	public Object onCall(MuleEventContext eventContext) throws Exception {
		 String hostPath = eventContext.getMessage().getInvocationProperty("hostProcessorPath");
		    String hostIp = eventContext.getMessage().getInvocationProperty("host_ip");
		    String hostPort = eventContext.getMessage().getInvocationProperty("host_port");
		    String fileFullPaTh  = eventContext.getMessage().getInvocationProperty("filePath");
		    String filename  = eventContext.getMessage().getInvocationProperty("filename");


		    System.out.println(hostPath);
		    System.out.println(hostIp);
		    System.out.println(hostPort);
		    System.out.println(filename);


		    SSHClient ssh = new SSHClient();
		    try {
		    	
		         ssh.addHostKeyVerifier(new PromiscuousVerifier());
		         ssh.connect(hostIp , Integer.parseInt(hostPort));
		         ssh.authPassword("ubuntu", "reverse".toCharArray());
		        // Present here to demo algorithm renegotiation - could have just put this before connect()
		        // Make sure JZlib is in classpath for this to work
		        //not necessary for while
		        //ssh.useCompression();

		        final String src = fileFullPaTh + "\\" + filename;
		        System.out.println(src);
		        ssh.newSCPFileTransfer().upload(new FileSystemFile(src), hostPath + "/" + src.replace("\\", "_"));

		    }finally{
		    	ssh.close();
		    }

		    return true;	
	}

}
