ARG NODE=node:16-alpine


# Step 1 
FROM ${NODE} AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /restapi_mysql
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi 


# Step 2
# mhart/alpine-node:slim-16 ==> prodictom
# CMD ["node" , "app.js"]
FROM ${NODE}  AS runner
WORKDIR /restapi_mysql
COPY --from=dependencies /restapi_mysql/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["yarn" , "dev"]







