import javax.swing.JOptionPane;

public class RandomGuess {

    public static void main(String[] args) {


       JOptionPane.showMessageDialog(
             null,
             "Think of a number between 1 and 10."
       );


        int randomNumber = 1 + (int)(Math.random() * 10);


        JOptionPane.showMessageDialog(
                null,
                "The number is " + randomNumber
        );

        System.exit(0);
    }
}
