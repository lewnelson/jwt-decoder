import jwtDecode from "jwt-decode";

type Token = Record<any, any>;

const printUsage = () => {
  console.log("Usage:");
  console.log("jwt-decode <token>");
};

const getTokenFromArgs = (): string => {
  const args = process.argv;
  return args[2] ?? "";
};

const printToken = (token: Token): void => {
  console.log(JSON.stringify(token, null, 2));
};

const main = async (): Promise<void> => {
  try {
    const input = getTokenFromArgs();
    const token = jwtDecode<Token>(input);
    printToken(token);
    process.exit(0);
  } catch (error) {
    printUsage();
    process.exit(1);
  }
};

main();
