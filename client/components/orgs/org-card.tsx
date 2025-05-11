import { Org } from "lib/types";
import Link from "next/link";

type Props = {
  org: Org;
  isLink?: boolean;
};

export const OrgCard = ({ org, isLink = false }: Props) => {
  const cardContent = (
    <div className="w-full border border-slate-300 p-4 rounded-lg">
      <h2 className="text-xl font-semibold">{org.name}</h2>
      {org.staffs.length > 0 && (
        <>
          <h3 className="mt-2 font-medium">Staff:</h3>
          <ul className="ml-4 list-disc">
            {org.staffs.map((staff) => (
              <li key={staff.id}>
                {staff.first_name} {staff.last_name} (
                {staff.specialty || "No specialty"})
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );

  return isLink ? (
    <Link href={`org/edit/${org.id}`} className="w-full rounded-lg">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};
