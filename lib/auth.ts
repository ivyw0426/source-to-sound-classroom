export const adultRoles = [
  "Teacher",
  "Parent or Guardian",
  "School Administrator",
  "Community or Program Partner",
] as const;

export type AdultRole = (typeof adultRoles)[number];

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  role: AdultRole | null;
  created_at?: string;
  updated_at?: string;
};

export type BootcampRegistration = {
  id: string;
  user_id: string;
  adult_name: string;
  adult_email: string;
  adult_role: AdultRole;
  school_or_organization: string;
  student_first_name: string;
  student_grade: "6" | "7" | "8";
  city: string;
  state: string;
  preferred_class_slot: string;
  alternate_class_slot: string | null;
  technology_access: string;
  research_interest: string;
  accommodations_or_notes: string | null;
  status: "Submitted" | "Under Review" | "Accepted" | "Waitlisted" | "Declined";
  created_at?: string;
  updated_at?: string;
};
