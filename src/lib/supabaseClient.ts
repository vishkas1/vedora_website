import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  'https://rpbjxyabyazbmhfivvaw.supabase.co',
  'sb_publishable_BiZ1_2GSZC1ykUsq2Ud7wg_xdRaKIN9'
);


// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
// );