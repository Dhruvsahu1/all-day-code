public class uniquePath {
    public static void main(String[] args) {
        int m = 3;
        int n = 7;
        String ans ="";
        System.out.println(printPath(0,0,m-1,n-1,ans));

    }
    public static int printPath(int sx , int sy,int ex,int ey,String ans) {
        if(sx == ex && sy == ey){
            System.out.println(ans);
            return 1;
        }
        if(sx>ex ||  sy>ey){
            return 0;
        }
        int a = printPath(sx+1, sy, ex, ey, ans + "v");
        int b = printPath(sx, sy+1, ex, ey, ans + "h");
        return a+b;
    }
}
