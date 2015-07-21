package test;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WebController {

   @RequestMapping(value = "/index", method = RequestMethod.GET)
   public String index() {
	   return "index";
   }
   
   @RequestMapping(value = "/staticPage", method = RequestMethod.GET)
   public String redirect() {
     
      return "redirect:/pages/index.html";
   }
   
   
   @RequestMapping(value = "/getDate", method = RequestMethod.GET)
   public @ResponseBody String getMailDatae() { 
      JSONArray ja =  new JSONArray();
      int k=0;
      try{
      for(int i=0;i<10;i++)
      {
    	 
    	  JSONObject obj =  new JSONObject();
    	  obj.put("mailId", ("testmail"+i+""));
    	  obj.put("MailTemplate", ("xyz"+i));
    	  if(i%2==0){
    	  obj.put("status", ("Active"));
    	  }
    	  else
    		  obj.put("status", ("Ready"));
    	  ja.put(obj);
    	  k=0;
      } 
      }
	  catch(JSONException e){
		  e.printStackTrace();
	  }
      
      
      
      
      return ja.toString();
      
   }
}