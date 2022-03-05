import { useEffect, useRef } from "react";
import { forceDirectedGraph } from "./forceGraph";

const SecondChart = () => {
    let svgRef = useRef(null)

    useEffect(() => {
        forceDirectedGraph(
            {
                "name": "Ecosystem",
                "children": [
                    {
                        "name": "Convo",
                        "children": [
                            {
                                "name": "SDK"
                            },
                            {
                                "name": "API",
                                "children" : [
                                    {
                                        "tooltip": "ceramic",
                                        "img": "/ecosystem/convo/api/ceramic.png"
                                    },
                                    {
                                        "tooltip": "filecoin",
                                        "img": "/ecosystem/convo/api/filecoin.png"
                                    },
                                    {
                                        "tooltip": "ipfs",
                                        "img": "/ecosystem/convo/api/ipfs.png"
                                    },
                                    {
                                        "tooltip": "textile",
                                        "img": "/ecosystem/convo/api/textile.png"
                                    }
                                ]
                            },
                            {
                                "name": "ConvoX",
                                "children": [
                                    {
                                        "tooltip": "MetaMask",
                                        "img": "/ecosystem/convo/convox/metamask.png"
                                    },
                                    {
                                        "tooltip": "Figma",
                                        "img": "/ecosystem/convo/convox/figma.png"
                                    },
                                    {
                                        "tooltip": "forta",
                                        "img": "/ecosystem/convo/convox/forta.png"
                                    },
                                    {
                                        "tooltip": "decentraland",
                                        "img": "/ecosystem/convo/convox/decentraland.png"
                                    },
                                    {
                                        "tooltip": "snapshot",
                                        "img": "/ecosystem/convo/convox/snapshot.png"
                                    },
                                    {
                                        "tooltip": "browser",
                                        "img": "/ecosystem/convo/convox/chrome.png"
                                    }
                                ]
                            },
                            {
                                "name": "Chains",
                                "children": [
                                    {
                                        // "name": "Near",
                                        "img": "/ecosystem/convo/chains/celo.png"
                                    },
                                    {
                                        // "name": "Solana",
                                        "img": "/ecosystem/convo/chains/cosmos.png"
                                    },
                                    {
                                        // "name": "Flow",
                                        "img": "/ecosystem/convo/chains/ethereum.png"
                                    },
                                    {
                                        // "name": "Ethereum",
                                        "img": "/ecosystem/convo/chains/flow.png"
                                    },
                                    {
                                        // "name": "Flow",
                                        "img": "/ecosystem/convo/chains/near.png"
                                    },
                                    {
                                        // "name": "Ethereum",
                                        "img": "/ecosystem/convo/chains/solana.png"
                                    }
                                ]
                            },
                            {
                                "name": "Bridge",
                                "children": [
                                    {
                                        "tooltip": "zoom",
                                        "img": "/ecosystem/convo/bridge/zoom.png"
                                    },
                                    {
                                        "tooltip": "discord",
                                        "img": "/ecosystem/convo/bridge/discord.png"
                                    },
                                    {
                                        "tooltip": "slack",
                                        "img": "/ecosystem/convo/bridge/slack.png"
                                    },
                                    {
                                        "tooltip": "telegram",
                                        "img": "/ecosystem/convo/bridge/telegram.png"
                                    },
                                    {
                                        "tooltip": "twitch",
                                        "img": "/ecosystem/convo/bridge/twitch.png"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Omnid",
                        "label": "Omnid",
                        "children": [
                            {
                                "name": "DeFi",
                                "children": [
                                    { "tooltip": "aave", "img": "/ecosystem/omnid/defi/aave.png" },
                                    { "tooltip": "arcx", "img": "/ecosystem/omnid/defi/arcx.png" },
                                    { "tooltip": "debank", "img": "/ecosystem/omnid/defi/debank.svg" },
                                    { "tooltip": "polygon", "img": "/ecosystem/omnid/defi/polygon.png" },
                                    { "tooltip": "sybil", "img": "/ecosystem/omnid/defi/sybil.png" }
                                ]
                            },
                            {
                                "name": "Eco",
                                "children": [
                                    { "tooltip": "celo", "img": "/ecosystem/omnid/eco/celo.png" },
                                    { "tooltip": "dapplist", "img": "/ecosystem/omnid/eco/dapplist.png" },
                                    { "tooltip": "ens", "img": "/ecosystem/omnid/eco/ens.png" },
                                    { "tooltip": "forta", "img": "/ecosystem/omnid/eco/forta.png" },
                                    { "tooltip": "gitcoin", "img": "/ecosystem/omnid/eco/gitcoin.png" },
                                    { "tooltip": "mirror", "img": "/ecosystem/omnid/eco/mirror.png" },
                                    { "tooltip": "rabbithole", "img": "/ecosystem/omnid/eco/rabbithole.png" },
                                    { "tooltip": "unstoppable", "img": "/ecosystem/omnid/eco/unstoppable.png" }
                                ]
                            },
                            {
                                "name": "Identity",
                                "children": [
                                    { "tooltip": "brightid", "img": "/ecosystem/omnid/identity/brightid.png" },
                                    { "tooltip": "cyberconnect", "img": "/ecosystem/omnid/identity/cyberconnect.png" },
                                    { "tooltip": "hiveone", "img": "/ecosystem/omnid/identity/hiveone.png" },
                                    { "tooltip": "idena", "img": "/ecosystem/omnid/identity/idena.png" },
                                    { "tooltip": "idx", "img": "/ecosystem/omnid/identity/idx.png" },
                                    { "tooltip": "poh", "img": "/ecosystem/omnid/identity/poh.png" },
                                    { "tooltip": "popp", "img": "/ecosystem/omnid/identity/popp.png" },
                                    { "tooltip": "projectgalaxy", "img": "/ecosystem/omnid/identity/projectgalaxy.png" },
                                    { "tooltip": "rss3", "img": "/ecosystem/omnid/identity/rss3.png" }
                                ]
                            },
                            {
                                "name": "NFTs",
                                "children": [
                                    { "tooltip": "asyncart", "img": "/ecosystem/omnid/nfts/asyncart.png" },
                                    { "tooltip": "coinvise", "img": "/ecosystem/omnid/nfts/coinvise.png" },
                                    { "tooltip": "context", "img": "/ecosystem/omnid/nfts/context.png" },
                                    { "tooltip": "foundation", "img": "/ecosystem/omnid/nfts/foundation.png" },
                                    { "tooltip": "knownorigin", "img": "/ecosystem/omnid/nfts/knownorigin.png" },
                                    { "tooltip": "rarible", "img": "/ecosystem/omnid/nfts/rarible.png" },
                                    { "tooltip": "showtime", "img": "/ecosystem/omnid/nfts/showtime.png" },
                                    { "tooltip": "superrare", "img": "/ecosystem/omnid/nfts/superrare.png" },
                                    { "tooltip": "zora", "img": "/ecosystem/omnid/nfts/zora.png" }
                                ]
                            },
                            {
                                "name": "DAOs",
                                "children": [
                                    { "tooltip": "boardroom", "img": "/ecosystem/omnid/dao/boardroom.png" },
                                    { "tooltip": "coordinape", "img": "/ecosystem/omnid/dao/coordinape.png" },
                                    { "tooltip": "deepdao", "img": "/ecosystem/omnid/dao/deepdao.png" },
                                    { "tooltip": "metagame", "img": "/ecosystem/omnid/dao/metagame.png" }
                                ]
                            },
                            {
                                "name": "ScamDBs",
                                "children": [
                                    { "tooltip": "cryptoscamdb", "img": "/ecosystem/omnid/phishing/cryptoscamdb.png" },
                                    { "tooltip": "cryptoscamdb", "img": "/ecosystem/omnid/phishing/etherscan.png" },
                                    { "tooltip": "cryptoscamdb", "img": "/ecosystem/omnid/phishing/mew.png" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Varta",
                        "children": [
                            { "name": "🤫", "value": 5 },
                        ]
                    },
                    {
                        "name": "🤫"
                    }
                ]
            }
            ,
            svgRef.current
        )
    },[])

    return <svg ref={svgRef} />
}

export default SecondChart
