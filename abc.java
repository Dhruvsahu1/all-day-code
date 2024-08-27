import java.util.Scanner;;
public class abc {
    static void equal(String a , String b){
        if(a.length() == b.length()){
            for(int i = 0;i<a.length();i++){
                if(a.charAt(i) == b.charAt(i))
                System.out.println("these are equals");
            }
        }
        else{
            System.out.println("these are not equals");
        }
      
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // int sum  = 0;
        // int n = sc.nextInt();
        // int arr[] = new int[n];
        // for(int i = 0;i<n;i++){
        //     arr[i]  = sc.nextInt();
        //     // System.out.println(arr[i]);4
        // }
        // for(int i = 0;i<arr.length;i++){
        //     if(n%(i+1) == 0){
        //         sum = sum+ arr[i]*arr[i];
        //     }
            
        // }
        // System.out.println(sum);
        String a  = sc.nextLine();
        String b = sc.nextLine();
        equal(a,b);
    }
}
