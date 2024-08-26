public class TowerOfHanoi {
    public static void TOH(int n,String src,String hel,String dest){
        if(n==1){
            System.out.println("transfer disk " +n+ " from "+ src + " to "+ dest);
            return ;
        }
        TOH(n-1,src,dest,hel);
        System.out.println("transfer disk " +n+ " from "+ src + " to "+ dest);
        TOH(n-1,hel,src,dest);
    }
    public static void main(String[] args) {
        int n  = 3;
        TOH(n, "s", "h", "d");
    }
}
