import { getEnvVar } from "../utils/envUtils";

export const AlistHost = getEnvVar(process.env.NEXT_PUBLIC_CF_ALIST_HOST)