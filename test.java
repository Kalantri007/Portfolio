public class Main {
    public static int[][] solution(int n, int m, char[] figures) {
        int[][] grid = new int[n][m];

        // Define shapes for A to E
        int[][][] shapes = {
            {{0,0}, {1,0}},               // A: vertical 2x1
            {{0,0}, {0,1}},               // B: horizontal 1x2
            {{0,0}, {0,1}, {1,0}, {1,1}}, // C: 2x2 square
            {{0,0}, {1,0}, {2,0}, {2,1}}, // D: L shape
            {{0,1}, {1,0}, {1,1}, {1,2}}  // E: T shape
        };

        for (int idx = 0; idx < figures.length; idx++) {
            char f = figures[idx];
            int shapeIndex = f - 'A';
            int[][] shape = shapes[shapeIndex];
            boolean placed = false;

            for (int i = 0; i < n && !placed; i++) {
                for (int j = 0; j < m && !placed; j++) {
                    if (canPlace(grid, i, j, shape, n, m)) {
                        placeShape(grid, i, j, shape, idx + 1);
                        placed = true;
                    }
                }
            }
        }

        return grid;
    }

    private static boolean canPlace(int[][] grid, int x, int y, int[][] shape, int n, int m) {
        for (int[] s : shape) {
            int newX = x + s[0];
            int newY = y + s[1];
            if (newX >= n || newY >= m || grid[newX][newY] != 0) {
                return false;
            }
        }
        return true;
    }

    private static void placeShape(int[][] grid, int x, int y, int[][] shape, int value) {
        for (int[] s : shape) {
            grid[x + s[0]][y + s[1]] = value;
        }
    }

    // For testing
    public static void main(String[] args) {
        int[][] result = solution(4, 4, new char[]{'D', 'B', 'A', 'C'});
        for (int[] row : result) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
