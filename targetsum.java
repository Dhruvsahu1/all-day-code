public class targetsum {
    public static void main(String[] args) {
        int arr[] = {5,10,70};
        int target = 100;
        int j = 1;
        for(int i = 0;i<8;i++){
            if(arr[i]+arr[j] == target){
                System.out.println(i + " "+ j);
            }
        }
    }
}
