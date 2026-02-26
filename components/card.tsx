import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export default function CardDemo() {
  return (
    <Card className="w-[300px] rounded-2xl shadow-lg hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src="https://images.unsplash.com/photo-1536152470836-b943b246224c?q=80&w=400"
          alt="Nature"
          className="w-full h-60 object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">Classic T-Shirt</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          Premium quality cotton T-shirt with modern fit and soft fabric.
        </p>
        <p className="text-xl font-bold">$29.99</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full rounded-xl">
          Add to Cart
        </Button>
      </CardFooter>

    </Card>
  )
}