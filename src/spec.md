# Specification

## Summary
**Goal:** Update the Service Coverage banner caption text and remove one photo from the Live Photos section.

**Planned changes:**
- Update the English translation string `serviceCoverage.caption` to exactly: "Service coverage areas in Ahmedabad and Gandhi Nagar - Professional residential cleaning services including flats, bungalows, offices, and hospitals".
- Keep the Service Coverage banner rendering the caption from `t.serviceCoverage.caption` below the banner image so the updated sentence is visible on-page.
- Remove the last `livePhotos` array entry in `frontend/src/components/landing/LivePhotos.tsx` whose `src` is `/assets/generated/live-ac-water-jet-1.dim_1600x1200.jpg`.

**User-visible outcome:** Visitors see the updated Service Coverage caption text under the banner image, and the Live Photos grid displays one fewer photo (with the AC water jet image no longer shown).
