/**
 * PAIR B VERCEL INTEGRATION CONFIG
 * Replace the URL below with your friend's live Vercel link!
 */
export const PAIR_B_BASE_URL =
  import.meta.env.VITE_PAIR_B_URL || 'https://YOUR-FRIENDS-SITE.vercel.app';

/**
 * 1. Opens Pair B's Whole Website (Navbar "ENTER DOMAIN" button)
 */
export const openPairBHome = () => {
  window.open(PAIR_B_BASE_URL, '_blank', 'noopener,noreferrer');
};

/**
 * 2. Opens Pair B's Specific Mission Registration (Card & Dossier "PROCEED TO INSCRIPTION" buttons)
 * Automatically attaches the selected event's ID (e.g. ?eventId=evt-008)
 */
export const openPairBInscription = (eventId?: string) => {
  const url = eventId
    ? `${PAIR_B_BASE_URL}/inscription?eventId=${eventId}`
    : `${PAIR_B_BASE_URL}/inscription`;
    
  window.open(url, '_blank', 'noopener,noreferrer');
};