export default function Input({
  onTextChange = () => false
}) {
  return (
    <div className="mt-4">
      <label htmlFor="account-number" className="block mb-2 text-sm font-medium text-gray-200">
        Hedera Account Id
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type="text"
          name="account-number"
          id="account-number"
          className="block py-4 w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500 text-xl"
          placeholder="0.0.123456"
          pattern="[0-9].[0-9].[0-9]"
          onChange={onTextChange}
        />
      </div>
    </div>
  )
}
