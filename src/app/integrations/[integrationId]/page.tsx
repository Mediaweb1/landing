import Image from "next/image";

const INTEGRATIONS = [
  {
    id: "facebook",
    heading: "Facebook",
    imageUrl: "/icons/original-logos/facebook.webp",
    subHeading: "Automate Your Analytics for Seamless Brand Partnerships",
    paragraph:
      "Our Facebook integration automatically pulls in your facebook analytics, allowing you to showcase your engagement, reach and audience demographics directly in your MediaKit, without having to manually update it everytime you are approached or reach out to a brand",
  },
  {
    id: "instagram",
    heading: "Instagram",
    imageUrl: "/icons/original-logos/instagram.webp",
    subHeading: "Showcase Instagram Metrics for Engaging Brand Collaborations",
    paragraph:
      "Our Instagram integration seamlessly imports your analytics, showcasing your follower growth, engagement rates, and audience demographics in your MediaKit. Keep your data updated automatically, making it easy to attract and secure brand deals.",
  },
  {
    id: "tiktok",
    heading: "TikTok",
    imageUrl: "/icons/original-logos/tiktok.webp",
    subHeading: "Highlight TikTok Influence with Real-Time Analytics",
    paragraph:
      "Leverage our TikTok integration to pull in your video performance metrics, audience insights, and engagement rates directly into your MediaKit. Keep your brand pitch ready with up-to-date data, helping you secure impactful partnerships.",
  },
  {
    id: "snapchat",
    heading: "Snapchat",
    imageUrl: "/icons/original-logos/snapchat.webp",
    subHeading: "Capture Snapchat Engagement for Strategic Brand Deals",
    paragraph:
      "Our Snapchat integration automatically updates your MediaKit with real-time insights on your Snaps, Stories, and audience engagement. Present your influence effectively to potential partners, ensuring you always have the latest data on hand.",
  },
  {
    id: "x",
    heading: "X (formerly Twitter)",
    imageUrl: "/icons/original-logos/x.webp",
    subHeading: "Display X (Twitter) Metrics for Compelling Collaborations",
    paragraph:
      "With our X integration, effortlessly include your latest engagement statistics, follower demographics, and post performance in your MediaKit. Stay ahead in brand negotiations with up-to-date insights that showcase your influence.",
  },
  {
    id: "youtube",
    heading: "YouTube",
    imageUrl: "/icons/original-logos/youtube.webp",
    subHeading: "Showcase YouTube Reach for Enhanced Brand Opportunities",
    paragraph:
      "Integrate YouTube analytics directly into your MediaKit to highlight your channel's performance, audience demographics, and video engagement. Keep your MediaKit current, helping you attract and secure valuable brand partnerships.",
  },
];

const Integration = async ({ params }: { params: Promise<{ integrationId: string }> }) => {
  const { integrationId } = await params;
  const data = INTEGRATIONS.find(
    (integration) => integration.id === integrationId
  );

  if (!data) {
    return (
      <main className="flex flex-col items-center justify-center h-full min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Integration Not Found</h1>
          <p className="text-gray-400">The requested integration does not exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center h-full min-h-[60vh] py-20">
      <div className="w-full px-4 md:px-8 lg:max-w-[1000px] xl:max-w-[1200px]">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12 items-center justify-center">
          <div className="w-full lg:w-1/2 flex flex-col space-y-4">
            <div className="flex space-x-4 items-center">
              <Image
                src={data.imageUrl}
                width={100}
                height={100}
                className="aspect-square h-16 w-16"
                alt={data.heading}
              />
              <h1 className="text-4xl font-[550] text-white">{data.heading}</h1>
            </div>

            <p className="text-gray-300 text-lg">{data.subHeading}</p>
          </div>

          <div className="w-full lg:w-1/2 p-8 lg:p-12 border border-primary/80 bg-primary/20 rounded-[30px] shadow-2xl">
            <p className="w-full leading-8 text-white">{data.paragraph}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Integration;
