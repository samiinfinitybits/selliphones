import { BoltIcon } from "@/components/ui/icons";

export function AnnouncementBar() {
  return (
    <div className="bg-accent text-ink">
      <div className="mx-auto flex max-w-[1240px] items-center justify-center gap-2 px-5 py-2 text-center">
        <BoltIcon className="h-3.5 w-3.5 shrink-0" />
        <p className="label-mono text-[0.62rem] font-bold sm:text-[0.68rem]">
          Free doorstep pickup across Dubai · Paid in cash the same day
        </p>
      </div>
    </div>
  );
}
