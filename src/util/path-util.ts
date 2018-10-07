
export class PathUtil {

    public static ab(args: string[]) {
        return args.map((arg, idx) => {
            const delimiter = '/';
            if (idx !== args.length -1) {
                return arg + delimiter;
            }

            return arg;
        });
    }
}