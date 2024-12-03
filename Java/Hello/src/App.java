public class App {
    public static void main(String[] args) throws Exception {
        int n =14; //입력받은 정수
        int count = 0;
    //      반복문 생성
    //      앞쪽 숫자
        for(int i = 1; i <= n ; i++) {
    //뒤쪽 숫자
            for(int j = 1; j <= n ; j++) {
                if (n % (i*j) == 0){
                    count++;
        System.out.println(n + "의 약수" + i +","+ j);
                }
            }
    //          아래는 오케이
             System.out.println("약수의 개수" + count + "개");
        }
    }
}
