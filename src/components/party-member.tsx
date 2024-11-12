export default function PartyMember({
  name,
  role,
  imageUrl,
}: {
  name: string;
  role: string;
  imageUrl: string;
}) {
  return (
    <div className="flex flex-col items-center mb-8">
      <img
        src={imageUrl}
        alt={name}
        className="w-[150px] h-[150px] rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}
