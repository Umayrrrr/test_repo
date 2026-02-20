// import { useEffect, useState } from "react";

// export const usePermissions = (userId: string | undefined) => {
//   const [permissions, setPermissions] = useState<Record<string, boolean>>({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!userId) {
//       setError("User ID not provided");
//       return;
//     }

//     const actionsResources = [
//       { action: "create", resource: "users" },
//       { action: "read", resource: "users" },
//       { action: "update", resource: "users" },
//       { action: "delete", resource: "users" },
//     ];

//     // Fetch bulk permissions from the backend
//     fetch("<http://localhost:5001/getUsers>", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         user: userId,
//         resourcesAndActions: actionsResources,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         const perms = actionsResources.reduce(
//           (acc, { action, resource }, index) => {
//             acc[`${action}:${resource}`] = data[index];
//             return acc;
//           },
//           {} as Record<string, boolean>,
//         );

//         setPermissions(perms);
//         setError(null);
//       })
//       .catch((err) => {
//         console.error("Error fetching permissions:", err);
//         setError("Error fetching permissions");
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [userId]);

//   return { permissions, isLoading, error };
// };
