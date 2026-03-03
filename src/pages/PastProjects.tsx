import { getPastProjects } from "@/data/projects";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ScrollReveal } from "@/components/ScrollReveal";

const soldDirectory: { year: number; addresses: string[] }[] = [
  { year: 2011, addresses: ["1917 W Cornelia", "1921 W Newport"] },
  { year: 2012, addresses: ["3644 N Wayne", "3303 N Hoyne"] },
  { year: 2013, addresses: ["3301 N Leavitt", "2320 N Greenview", "2726 N Marshfield", "1709 W Wrightwood"] },
  { year: 2014, addresses: ["2238 N Magnolia", "1818 N Wolcott", "1939 W Fletcher", "1456 W Fullerton"] },
  { year: 2015, addresses: ["1829 N Bissell", "1416 W School", "1543 W Diversey"] },
  { year: 2016, addresses: ["1823 N Bissell", "2122 N Kenmore", "1718 N Mohawk"] },
  { year: 2017, addresses: ["2138 N Seminary", "2139 N Seminary", "2116 N Magnolia", "2029 N Bissell Unit 1", "2029 N Bissell Unit 2"] },
  { year: 2018, addresses: ["2118 N Magnolia", "2745 W Lawrence"] },
  { year: 2019, addresses: ["1851 N Fremont", "2120 N Kenmore"] },
  { year: 2020, addresses: ["2136 N Kenmore", "2745 W Lawrence", "2751 W Lawrence", "2755 W Lawrence"] },
  { year: 2021, addresses: ["2759 W Lawrence", "2763 W Lawrence", "4304 N Western"] },
  { year: 2022, addresses: ["2614 W Chicago", "2215 Halsted", "2761 N Kenmore"] },
  { year: 2023, addresses: ["3352 N Ashland", "2606 W Chicago", "2612 W Chicago"] },
  { year: 2024, addresses: ["3125 Clybourn", "1613 W Belmont"] },
];

export default function PastProjects() {
  const projects = getPastProjects();

  return (
    <div className="pt-16">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-14">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Portfolio
              </p>
              <h1 className="text-3xl font-semibold md:text-4xl">
                Past Projects
              </h1>
              <p className="mt-3 text-muted-foreground">
                {projects.length} completed properties across Chicagoland
              </p>
            </div>
          </ScrollReveal>
          <ProjectGrid projects={projects} columns={3} />

          {/* Sold directory — all projects grouped by year */}
          <ScrollReveal>
            <div className="mt-24 border-t border-border/40 pt-16">
              <h2 className="mb-10 text-2xl font-semibold md:text-3xl">
                Complete Project Directory
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {soldDirectory.map((group) => (
                  <div key={group.year}>
                    <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                      Sold in {group.year}
                    </h3>
                    <ul className="space-y-1.5">
                      {group.addresses.map((addr) => (
                        <li
                          key={addr}
                          className="text-sm text-foreground/75"
                        >
                          {addr}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
