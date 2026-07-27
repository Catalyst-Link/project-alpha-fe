<template>
    <VSidebarRoot>
        <VSidebarHeader>
            <VSidebarMenu>
                <VSidebarMenuItem>
                    <VSidebarMenuButton size="lg">
                        <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                            <IconLucideGalleryVerticalEnd class="size-4" />
                        </div>
                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold">HRIS Portal</span>
                            <span class="truncate text-xs">Enterprise</span>
                        </div>
                    </VSidebarMenuButton>
                </VSidebarMenuItem>
            </VSidebarMenu>
        </VSidebarHeader>
        <VSidebarContent>
            <VSidebarGroup>
                <VSidebarGroupLabel>Platform</VSidebarGroupLabel>
                <VSidebarGroupContent>
                    <VSidebarMenu>
                        <VSidebarMenuItem>
                            <VSidebarMenuButton as-child>
                                <RouterLink :to="{ name: 'index' }">
                                    <span>
                                        <IconLucideHome />
                                    </span>
                                    <span>Dashboard</span>
                                </RouterLink>
                            </VSidebarMenuButton>
                            <VSidebarMenuButton as-child>
                                <RouterLink :to="{ name: 'index' }">
                                    <span>
                                        <IconLucideHome />
                                    </span>
                                    <span>Role Management</span>
                                </RouterLink>
                            </VSidebarMenuButton>
                        </VSidebarMenuItem>
                    </VSidebarMenu>
                </VSidebarGroupContent>
            </VSidebarGroup>
        </VSidebarContent>
        <VSidebarFooter />
        <VSidebarRail />
    </VSidebarRoot>
</template>
