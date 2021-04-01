function interleave(a, b) {
  let final = "";
  const stringA = a.toString();
  const stringB = b.toString();

  for (let i = 0; i < stringA.length || i < stringB.length; i++) {
    if (stringA[i]) {
      final += stringA[i];
    }
    if (stringB[i]) {
      final += stringB[i];
    }
  }
  return final;
}
