import { Truck, ShieldCheck, Banknote } from "lucide-react";

export default function Values() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center bg-[#f7f7f7] px-6 py-10 text-center">
          <Truck className="mb-4 h-6 w-6 text-gray-500" strokeWidth={1.5} />
          <h3 className="mb-1 text-lg font-medium text-gray-900">Free Shipping</h3>
          <p className="max-w-[240px] text-sm text-gray-500">
            Get free shipping on all orders over R800.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center bg-[#f7f7f7] px-6 py-10 text-center">
          <ShieldCheck className="mb-4 h-6 w-6 text-gray-500" strokeWidth={1.5} />
          <h3 className="mb-1 text-lg font-medium text-gray-900">Secure Payment</h3>
          <p className="max-w-[240px] text-sm text-gray-500">
            We keep your payment experience safe.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center bg-[#f7f7f7] px-6 py-10 text-center">
          <Banknote className="mb-4 h-6 w-6 text-gray-500" strokeWidth={1.5} />
          <h3 className="mb-1 text-lg font-medium text-gray-900">Money Back Guarantee</h3>
          <p className="max-w-[240px] text-sm text-gray-500">
            Not satisfied? Just return it to us.
          </p>
        </div>

      </div>
    </section>
  );
}