import java.io.*;
import java.util.*;

public class Main {

   public static void main(String[] args) throws Exception
   {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      int n = Integer.parseInt(br.readLine());
      int[] arr = new int[n];

      for (int i = 0; i < n; i++)
      {
         arr[i] = Integer.parseInt(br.readLine());
      }

      int k = Integer.parseInt(br.readLine());
      PriorityQueue<Integer> p1=new PriorityQueue<>();
      for(int i=0;i<k;i++)
          {
		  p1.add(arr[i]);
		  }
		  for(Integer n123:p1)
		  {
			  if(p1.peek()<arr[n123])
			  {
				  p1.remove(p1.peek());
				  p1.add(arr[n123]);
			  }
		  }
		  System.out.println(p1);

    }

}
