package Thirteenth;


public class RandomTeamSelectionHomeWork {
    public static void main(String[] args) {
        RadomTeamSelection rt = new RadomTeamSelection
                (17);

        rt.allocArrTeamMemberZeroValue();
        System.out.println("------------------");
        rt.allocArrTeamChoice();
        System.out.println("------------------");
        rt.printRandomTeamArr();
        System.out.println("------------------");
    }
    }

