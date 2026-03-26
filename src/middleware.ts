import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function goneResponse() {
	return new NextResponse("Gone", {
		status: 410,
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=604800",
			"X-Robots-Tag": "noindex, nofollow",
		},
	});
}

/**
 * 旧站查询串：?shop/xxx、?shop=… 等
 */
function isLegacyShopQuery(url: NextRequest["nextUrl"]): boolean {
	const q = url.search;
	if (!q || q.length < 2) return false;
	if (/[?&]shop(\/|=|&|$)/i.test(q)) return true;
	for (const key of url.searchParams.keys()) {
		if (key === "shop" || key.startsWith("shop/")) return true;
	}
	return false;
}

/**
 * 旧站路径（当前 App 无对应路由）：/p=123、/shop/…、/products/纯数字、/items/…
 */
function isLegacyPath(pathname: string): boolean {
	const p = pathname.toLowerCase();

	// /p=2079061、/P=2079061
	if (/^\/p=[^/]+$/i.test(pathname)) return true;

	// /shop/…、/shop5533712.shtml 等（整段 /shop 前缀）
	if (p === "/shop" || p.startsWith("/shop/")) return true;

	// 旧商城商品路径：仅数字 ID（本站 /products 仅为单页，无子路径）
	if (/^\/products\/\d+(?:\/.*)?$/i.test(pathname)) return true;

	// /items/K475835780/ 等
	if (p === "/items" || p.startsWith("/items/")) return true;

	return false;
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (isLegacyShopQuery(request.nextUrl) || isLegacyPath(pathname)) {
		return goneResponse();
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff2|txt|xml)$).*)",
	],
};
