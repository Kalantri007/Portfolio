public class Main {
    public static int[][] solution(int n, int m, char[] figures) {
        int[][] grid = new int[n][m];

        // Shape definitions (relative positions)
        int[][][] shapes = new int[5][][];
        shapes[0] = new int[][]{{0, 0}, {1, 0}};                     // A
        shapes[1] = new int[][]{{0, 0}, {0, 1}};                     // B
        shapes[2] = new int[][]{{0, 0}, {0, 1}, {1, 0}, {1, 1}};     // C
        shapes[3] = new int[][]{{0, 0}, {1, 0}, {2, 0}, {2, 1}};     // D
        shapes[4] = new int[][]{{0, 1}, {1, 0}, {1, 1}, {1, 2}};     // E

        for (int index = 0; index < figures.length; index++) {
            char fig = figures[index];
            int shapeIndex = fig - 'A';
            int[][] shape = shapes[shapeIndex];
            int value = index + 1;

            boolean placed = false;

            for (int i = 0; i < n && !placed; i++) {
                for (int j = 0; j < m && !placed; j++) {
                    if (canPlace(grid, i, j, shape, n, m)) {
                        place(grid, i, j, shape, value);
                        placed = true;
                    }
                }
            }
        }

        return grid;
    }

    private static boolean canPlace(int[][] grid, int i, int j, int[][] shape, int n, int m) {
        for (int[] s : shape) {
            int x = i + s[0];
            int y = j + s[1];
            if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] != 0) {
                return false;
            }
        }
        return true;
    }

    private static void place(int[][] grid, int i, int j, int[][] shape, int value) {
        for (int[] s : shape) {
            grid[i + s[0]][j + s[1]] = value;
        }
    }

    // Optional: Debug printing
    public static void print(int[][] grid) {
        for (int[] row : grid) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }

    // Example run
    public static void main(String[] args) {
        int[][] result = solution(3, 3, new char[]{'D', 'A', 'A', 'A', 'A', 'A'});
        print(result);
    }
}
