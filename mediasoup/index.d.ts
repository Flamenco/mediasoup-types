// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

export declare module mediasoup {
  export interface Room {
    id: number
    closed: boolean
    rtpCapabilities: any
    peers: Peer[]

    createRtpStreamer(
        producer: Producer,
        opts: {
          remoteIP: string;
          remotePort: number;
          localIP?: string;
          localPort?: number;
          // kind: 'udp' | 'tcp'
        }
    ): RtpStreamer;
  }

  export interface Peer {
    name: string
    closed: boolean
    appData: any
    rtpCapabilities: any
    transports: any[]
    producers: Producer[]
    consumers: Consumer[]
  }

  /**
   * Common to Producers and Consumers
   */
  interface BaseType {
    id: number
    closed: boolean
    appData: any
    rtpParameters: RtpParameters
    kind: 'audio' | 'video' | 'data'
    transport: any
    locallyPaused: boolean
    remotelyPaused: boolean
    paused: boolean
    getStats: Function

    pause: () => void
  }

  export interface Producer extends BaseType {
    peer: Peer
  }

  interface Consumer extends BaseType {
    peer: Peer | undefined // This is undefined when creating an RtpStreamer
    source: Producer //TODO this may be other types besides Producer
    preferredProfile: any
    effectiveProfile: any
  }

  interface RtpParameters {
    headerExtensions: any[];
    muxId: string
    codecs: Codec[]
  }

  interface Codec {
    rtcpFeedback: any[];
    payloadType: any;
    parameters: any[];
    name: string;
    clockRate: number;
  }

  interface PlainRtpTransport {
    tuple: {
      localIP: string
      localPort: number
      remoteIP: string
      remotePort: number
      protocol: 'udp' | 'tcp'
    }
  }

  export interface RtpStreamer {
    consumer: Consumer
    transport: PlainRtpTransport

    close(): () => void;
  }

  export interface ActiveSpeakerDetector {
    close: () => void
  }

  export interface RtpCodec {
    payload: any,
    codec: string,
    rate: number,
  }

  export interface RtpMedia {
    rtp: RtpCodec[];
    payloads: string | undefined;
  }
}