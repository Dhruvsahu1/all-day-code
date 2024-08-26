public class sudokuSolver {
    public static void main(String[] args) {
        char[][] board = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };
        solve(board,0,0);
        
    }
    public static void solve(char board[][],int row,int col){
        if(col == 9){
            row++;
            col = 0;
        }
        if(row == 9){
            print(board);
            return;
        }
        if(board[row][col] != '.'){
            solve(board, row, col+1);
        }
        for(char c = '1';c<='9';c++){
            if(isSafe(board,row,col,c)== true){
                board[row][col] = c;
                solve(board, row, col+1);
                board[row][col] = '.'; 
            }
        }
    }
    public static void print(char board[][]){
        for(int i = 0;i<board.length;i++){
            for(int j = 0;j<board[0].length;j++){
                System.out.println(board[i][j]+" ");
            }
            System.out.println();
        }
        return;
    }
    public static boolean isSafe(char board[][],int row,int col,char c){
        // for checking in row
        for(int j = 0;j<9;j++){
            if(board[row][j] == c){
                return false;
            }
        }
        //  for checking in col
        for(int j = 0;j<9;j++){
            if(board[j][col] == c){
                return false;
            }
        }
        // for checking in 3*3 matrix
        int mainRow = row-row%3;
        int mainCol = col-col%3;
        for(int i = mainRow;i<mainRow+3;i++){
            for(int j = mainCol;j<mainCol+3;j++){
                if(board[i][j] == c){
                    return false;
                }
            }
        }
        
        return true;
    }
}