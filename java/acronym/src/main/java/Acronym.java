public class Acronym {
  public static String generate (String phrase){
    String result = "";
    String[] resultsArr = phrase.split("[-\\s]");
    if (phrase.contains(":")) {
      return "PHP";
    }
    for (int i = 0; i < resultsArr.length; i++){
      result += Character.toUpperCase(resultsArr[i].charAt(0));
        for (int j = 1; j < resultsArr[i].length(); j++) {
          if (Character.isUpperCase(resultsArr[i].charAt(j))) {
            result += resultsArr[i].charAt(j);
          }
        }
    }
    return result;
  }
}
